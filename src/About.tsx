import React, { Component } from 'react';

export default class About extends Component {
  renderElement = (title: string, content: string) => (
    <div>
      <li>{title}</li>
      <ul>
        <li>{content}</li>
      </ul>
    </div>
  );
  render() {
    return (
      <div className="div-content">
        <h1 className="title">プロフィール</h1>
        <ul>
          {this.renderElement('Screen Name', 'JichouP')}
          {this.renderElement('所属', '東京工業大学 電気電子系 学士2年')}
          {this.renderElement(
            '環境（宗教）',
            'VSCode, Vim, Emacs, Ubuntu(WSL)'
          )}
          {this.renderElement('言語', 'JavaScript')}
        </ul>
      </div>
    );
  }
}
