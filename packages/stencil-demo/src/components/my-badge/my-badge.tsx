import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-badge',
  styleUrl: 'my-badge.css',
  shadow: true,
})
export class MyBadge {
  @Prop() variant: 'explicit' | 'default' | 'master' | 'live' = 'default';

  render() {
    return (
      <Host>
        <div class={`badge badge-${this.variant}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
