// ============================================
// KOECH INSIGHTS 5 - TASK MANAGER
// ============================================

// Initialize the app
let todos = [];
let currentFilter = 'all';
let editingId = null;
const STORAGE_KEY = 'koechInsights5_tasks';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterAllBtn = document.getElementById('filterAll');
const filterActiveBtn = document.getElementById('filterActive');
const filterCompletedBtn = document.getElementById('filterCompleted');
const sortBtn = document.getElementById('sortBtn');
const clearBtn = document.getElementById('clearBtn');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const pendingTasksSpan = document.getElementById('pendingTasks');
const progressPercentSpan = document.getElementById('progressPercent');
const modal = document.getElementById('editModal');
const editInput = document.getElementById('editInput');
const saveEditBtn = document.getElementById('saveEdit');
const cancelEditBtn = document.getElementById('cancelEdit');
const closeModalBtn = document.getElementById('closeModal');

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

filterAllBtn.addEventListener('click', () => setFilter('all'));
filterActiveBtn.addEventListener('click', () => setFilter('active'));
filterCompletedBtn.addEventListener('click', () => setFilter('completed'));
sortBtn.addEventListener('click', toggleSort);
clearBtn.addEventListener('click', clearAllTodos);

saveEditBtn.addEventListener('click', saveEdit);
cancelEditBtn.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

// Quick category buttons
document.querySelectorAll('.quick-categories .category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        if (category !== 'all') {
            todoInput.value = '';
            todoInput.focus();
        }
    });
});

// Initialize on page load
window.addEventListener('load', () => {
    loadTodos();
    renderTodos();
    updateStats();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ============================================
// FUNCTIONS
// ============================================

// Add a new todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    if (text.length > 120) {
        alert('Task is too long! Maximum 120 characters.');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        category: 'personal',
        createdAt: new Date().toLocaleDateString(),
        completedAt: null
    };

    todos.unshift(todo);
    saveTodos();
    renderTodos();
    updateStats();
    todoInput.value = '';
    todoInput.focus();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? new Date().toLocaleDateString() : null;
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Delete a todo
function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Open edit modal
function openEditModal(id) {
    editingId = id;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        editInput.value = todo.text;
        const categoryInput = document.querySelector(`input[value="${todo.category}"]`);
        if (categoryInput) categoryInput.checked = true;
        modal.classList.add('show');
        editInput.focus();
        editInput.select();
    }
}

// Close edit modal
function closeModal() {
    modal.classList.remove('show');
    editingId = null;
    editInput.value = '';
}

// Save edited todo
function saveEdit() {
    if (!editingId) return;
    
    const newText = editInput.value.trim();
    if (newText === '') {
        alert('Task cannot be empty!');
        return;
    }

    if (newText.length > 120) {
        alert('Task is too long! Maximum 120 characters.');
        return;
    }

    const todo = todos.find(t => t.id === editingId);
    if (todo) {
        todo.text = newText;
        todo.category = document.querySelector('input[name="category"]:checked').value;
        saveTodos();
        renderTodos();
        closeModal();
        updateStats();
    }
}

// Set filter
function setFilter(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (filter === 'all') filterAllBtn.classList.add('active');
    else if (filter === 'active') filterActiveBtn.classList.add('active');
    else if (filter === 'completed') filterCompletedBtn.classList.add('active');
    
    renderTodos();
}

// Toggle sort
function toggleSort() {
    todos.reverse();
    saveTodos();
    renderTodos();
}

// Clear all todos
function clearAllTodos() {
    if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone.')) {
        todos = [];
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Filter todos based on current filter
function getFilteredTodos() {
    if (currentFilter === 'all') return todos;
    if (currentFilter === 'active') return todos.filter(t => !t.completed);
    if (currentFilter === 'completed') return todos.filter(t => t.completed);
    return todos;
}

// Render todos to the DOM
function renderTodos() {
    const filtered = getFilteredTodos();
    todoList.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.classList.add('show');
        return;
    }

    emptyState.classList.remove('show');

    filtered.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <div class="todo-content">
                <div class="todo-text">${escapeHtml(todo.text)}</div>
                <div class="todo-meta">
                    <span class="todo-date">📅 ${todo.createdAt}</span>
                    <span class="todo-category ${todo.category}">${getCategoryIcon(todo.category)} ${capitalizeFirst(todo.category)}</span>
                    ${todo.completedAt ? `<span class="todo-date">✅ ${todo.completedAt}</span>` : ''}
                </div>
            </div>
            <div class="todo-actions">
                <button class="action-btn edit" onclick="openEditModal(${todo.id})">✏️ Edit</button>
                <button class="action-btn delete" onclick="deleteTodo(${todo.id})">🗑️ Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Update statistics
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    pendingTasksSpan.textContent = pending;
    progressPercentSpan.textContent = progress + '%';
}

// Save todos to local storage
function saveTodos() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Load todos from local storage
function loadTodos() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            todos = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        todos = [];
    }
}

// Utility Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCategoryIcon(category) {
    const icons = {
        work: '💼',
        personal: '👤',
        shopping: '🛍️',
        health: '💪'
    };
    return icons[category] || '📌';
}

// Log to console
console.log('🎯 Koech Insights 5 - Task Manager Loaded');
console.log('✅ All tasks are saved to your browser automatically');
console.log('📊 Version: 1.0.0');
