// API Base URL
const API_BASE = window.location.origin;

// DOM Elements
const registerForm = document.getElementById('registerForm');
const messageDiv = document.getElementById('message');
const statusDiv = document.getElementById('status');
const statusDot = statusDiv.querySelector('.status-dot');
const statusText = statusDiv.querySelector('.status-text');
const testConnectionBtn = document.getElementById('testConnection');

// Check connection on load
checkConnection();

// Test connection button
testConnectionBtn.addEventListener('click', checkConnection);

// Register form submission
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value,
        role: document.getElementById('role').value
    };

    // Validation
    if (!formData.username || !formData.password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Disable form
    setFormLoading(true);
    hideMessage();

    try {
        const response = await fetch(`${API_BASE}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            showMessage(
                `✅ ${data.message || 'User registered successfully!'} - Username: ${data.username}`,
                'success'
            );
            registerForm.reset();
        } else {
            showMessage(
                `❌ ${data.error || 'Registration failed. Please try again.'}`,
                'error'
            );
        }
    } catch (error) {
        showMessage(
            `❌ Network error: ${error.message}. Please check your connection.`,
            'error'
        );
    } finally {
        setFormLoading(false);
    }
});

// Check API connection
async function checkConnection() {
    statusText.textContent = 'Checking...';
    statusDot.className = 'status-dot';

    try {
        const response = await fetch(`${API_BASE}/api/auth/ping`);
        
        if (response.ok) {
            const text = await response.text();
            if (text === 'OK') {
                statusText.textContent = 'Online - API Connected';
                statusDot.className = 'status-dot online';
            } else {
                throw new Error('Unexpected response');
            }
        } else {
            throw new Error('API not responding');
        }
    } catch (error) {
        statusText.textContent = 'Offline - API Not Available';
        statusDot.className = 'status-dot offline';
        console.error('Connection check failed:', error);
    }
}

// Show message
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideMessage();
    }, 5000);
}

// Hide message
function hideMessage() {
    messageDiv.style.display = 'none';
}

// Set form loading state
function setFormLoading(loading) {
    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    if (loading) {
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        registerForm.classList.add('loading');
    } else {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        registerForm.classList.remove('loading');
    }
}

// Auto-check connection every 30 seconds
setInterval(checkConnection, 30000);


