# To-Do List Application

A fully functional, modern to-do list application with local storage functionality. Your tasks are automatically saved to your browser and persist even after you refresh the page!

## 🎯 Features

✨ **Local Storage** - All tasks automatically saved to your browser  
✨ **Add Tasks** - Quickly add new tasks with keyboard support (Enter key)  
✨ **Edit Tasks** - Edit existing tasks with modal dialog  
✨ **Delete Tasks** - Remove individual tasks with confirmation  
✨ **Mark Complete** - Check off completed tasks  
✨ **Filter Tasks** - View All, Active, or Completed tasks  
✨ **Sort Tasks** - Reverse the order of your tasks  
✨ **Categories** - Organize tasks by category (Work, Personal, Shopping, Other)  
✨ **Statistics** - Real-time stats showing Total, Completed, and Pending tasks  
✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✨ **Beautiful UI** - Modern gradient design with smooth animations  
✨ **Clear All** - Remove all tasks at once (with confirmation)  

## 📁 Files

- **index.html** - Application structure and markup
- **todo-styles.css** - Complete styling and responsive design
- **todo-script.js** - All JavaScript functionality
- **README.md** - This file

## 🚀 How to Use

### 1. Open the Application
Simply open `index.html` in your web browser.

### 2. Add a Task
- Type your task in the input field
- Click "+ Add" button or press Enter
- Your task will appear in the list below

### 3. Manage Tasks
- **Check off**: Click the checkbox to mark a task complete
- **Edit**: Click the "✏️ Edit" button to modify the task
- **Delete**: Click the "🗑️ Delete" button to remove a task
- **Change Category**: Edit the task to change its category

### 4. Filter Tasks
- **All Tasks**: View all tasks
- **Active**: View only incomplete tasks
- **Completed**: View only completed tasks

### 5. Sort Tasks
- Click the "↕️ Sort" button to reverse the order

### 6. Clear All
- Click the "🗑️ Clear All" button to delete all tasks (confirmation required)

## 💾 Local Storage

Your tasks are automatically saved to your browser's local storage. This means:
- ✅ Tasks persist when you refresh the page
- ✅ Tasks persist when you close and reopen the browser
- ✅ Each browser/device has its own task list
- ✅ No internet connection required
- ✅ No account signup needed

## 🎨 Customization

### Change Colors
Edit the gradient in `todo-styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Categories
Edit the categories in `index.html` (line ~38) and `todo-script.js`

### Change Storage Key
Edit `STORAGE_KEY` in `todo-script.js` (line 7) if you want to use a different storage location

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Data Structure
Each todo object contains:
```javascript
{
    id: 1234567890,           // Unique identifier
    text: 'Task description', // Task text
    completed: false,         // Completion status
    category: 'work',         // Category (work, personal, shopping, other)
    createdAt: '4/23/2026',  // Creation date
    completedAt: null         // Completion date (if completed)
}
```

### Local Storage
- **Key**: `koechInsights_todos`
- **Value**: JSON array of todo objects
- **Size**: Typically < 1MB per browser
- **Limit**: Usually 5-10MB per domain in most browsers

## 🐛 Troubleshooting

### Tasks not saving?
1. Check if local storage is enabled in your browser
2. Check browser console for errors (F12)
3. Try clearing browser cache
4. Try using a different browser

### Tasks disappeared?
1. Check if you cleared browser data/cache
2. Local storage was cleared by the browser
3. Try using incognito/private browsing mode (may have different storage)

### Cannot edit tasks?
1. Refresh the page
2. Clear browser cache and reload
3. Check browser console for JavaScript errors

## 🚀 Future Enhancements

- Cloud sync with account login
- Due dates and reminders
- Task priority levels
- Task notes/descriptions
- Dark mode
- Import/export tasks
- Recurring tasks
- Task subtasks
- Collaboration features
- Mobile app version

## 📝 Tips

1. Use categories to organize tasks by type
2. Regularly mark tasks complete to track progress
3. Use the filter buttons to focus on active tasks
4. Check the statistics to see your progress
5. Edit tasks to add more details or change categories

## ⚖️ License

Free to use and modify for personal or commercial projects.

## 📞 Support

For issues or suggestions, check the browser console (F12) for error messages.

---

**Created**: 2026-04-23  
**Last Updated**: 2026-04-23  
**Version**: 1.0.0
