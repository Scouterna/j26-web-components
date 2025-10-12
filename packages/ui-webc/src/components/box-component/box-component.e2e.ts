import { newE2EPage } from '@stencil/core/testing';

describe('box-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<box-component></box-component>');
    const element = await page.find('box-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with exampleProp', async () => {
    const page = await newE2EPage();

    await page.setContent('<box-component></box-component>');
    const component = await page.find('box-component');
    const element = await page.find('box-component >>> div');

    component.setProperty('exampleProp', 'test value');
    await page.waitForChanges();

    const paragraph = await element.find('p:last-child');
    expect(paragraph.textContent).toEqual('test value');
  });
});
