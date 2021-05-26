import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * This is the image url
   */
  @Prop() img: string;
  @Prop() top: string;
  @Prop() subtitle: 'JavaScript' | 'TypeScript' | 'Web Components';
  @Prop() meta: { master: boolean, explicit: boolean, label: string};

  render() {
    return (
      <Host>
        <div class="card">
        <img class="card-image" src={this.img} />
        <span class="card-title">{this.top}</span>
        <span class="card-subtitle">{this.subtitle}</span>
        <div class="card-meta">
          {this.meta.explicit && <my-badge variant="explicit">Explicit</my-badge>}
          {this.meta.master && <my-badge variant="master">Master</my-badge>}
          <span>{this.meta.label}</span>
        </div>
        <slot></slot>
        </div>
      </Host>
    );
  }
}
