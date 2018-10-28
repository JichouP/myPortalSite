import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div id="div-about">
        <h1 className="title">プロフィール</h1>
        <p>DisplayName:</p>
        <p>JichouP</p>
        <p>所属：</p>
        <p>東京工業大学 電気電子系 学士2年</p>
        <p>宗教：</p>
        <p>VSCode, Vim, Emacs, Ubuntu(WSL)</p>
        <p>言語</p>
        <p>JavaScript</p>
      </div>
    );
  }
}
