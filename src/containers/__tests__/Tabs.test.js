import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from '../Tabs';
import { TABS } from '../../util/constants';

describe('Tabs container', () => {
  test('Renders Tab div', () => {
    render(<Tabs />);
    const tabs = screen.getByTestId('div-tabs');
    expect(tabs).toBeInTheDocument();

  });

  test('Renders Tablist div', () => {
    render(<Tabs />);
    const tablist = screen.getByTestId('div-tablist');
    expect(tablist).toBeInTheDocument();
  });

  test('Renders Tablist buttons', () => {
    render(<Tabs />);
    const firstRecord = TABS[0];
    const firstTabBtn = screen.getByTestId(`btn-tabs${firstRecord.id}`);
    expect(firstTabBtn).toBeInTheDocument();

    const secondRecord = TABS[1];
    const secondTabBtn = screen.getByTestId(`btn-tabs${secondRecord.id}`);
    expect(secondTabBtn).toBeInTheDocument();
  });

  test('Renders TabPanel divs', () => {
    render(<Tabs />);
    const secondRecord = TABS[1];
    const btnElement = screen.getByTestId(`btn-tabs${secondRecord.id}`);
    userEvent.click(btnElement);
    const tabPanelDiv = screen.getByText(`${secondRecord.content.header}`);
    expect(tabPanelDiv).toBeInTheDocument();
  });

});
