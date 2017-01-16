import dva from 'dva';
import './index.css';

// 1. Initialize

const app = dva({
  initialState: {
    users: [
      {
        name: '张三',
        sex : 1,
        id: 1
      },
      {
        name: '李四',
        sex : 2,
        id: 2
      }
    ],
  },
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/example'));
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
