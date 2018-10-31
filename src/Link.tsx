import React, { Component } from 'react';

export default class Link extends Component {
  renderLink = (title: string, url: string) => (
    <div>
      <li>{title}</li>
      <ul>
        <li>
          <a href={url}>{url}</a>
        </li>
      </ul>
    </div>
  );
  render() {
    return (
      <div className='div-content'>
        <h1 className="title">リンク集</h1>
        <ul>
          {this.renderLink('Twitter', 'https://twitter.com/JichouP')}
          {this.renderLink('GitHub', 'https://github.com/jichoup')}
          {this.renderLink('Blog', 'https://blog.jichoup.com')}
          {this.renderLink(
            'MCServerDownloader',
            'https://jichoup.com/MinecraftServerDownloader/'
          )}
          {this.renderLink('OwnCloud', 'https://owncloud.jichoup.com')}
          {this.renderLink('Gmm', 'https://gmm.jichoup.com')}
        </ul>
      </div>
    );
  }
}
