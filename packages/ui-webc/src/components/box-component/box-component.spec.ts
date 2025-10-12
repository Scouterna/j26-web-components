import { newSpecPage } from '@stencil/core/testing';
import { BoxComponent } from './box-component';

describe('box-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BoxComponent],
      html: '<box-component></box-component>',
    });
    expect(root).toEqualHtml(`
      <box-component>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </box-component>
    `);
  });

  it('renders with variant', async () => {
    const { root } = await newSpecPage({
      components: [BoxComponent],
      html: '<box-component variant="default"></box-component>',
    });
    expect(root).toEqualHtml(`
      <box-component variant="default">
        <mock:shadow-root>
          <div class="default">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </box-component>
    `);
  });
});
