import './css/index.css'
//Reactを使うファイルでは必須
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//HTMLのidのある場所にコンポーネントを挿入
ReactDOM.render(<App />, document.getElementById('root'));