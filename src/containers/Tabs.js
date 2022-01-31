import React, { useEffect, useState } from 'react';
import { TabList, TabPanel } from '../components';
import { TABS } from '../util/constants';
import { jsonParse, useWindowUnloadEffect } from '../util';

const Tabs = () => {
  const [tabs, setTabs] = useState(TABS);

  const tabHandler = () => {
    const updatedTabs = tabs.map(t => ({
      ...t,
      hidden: !t.hidden,
      selected: !t.selected,
    }));
    setTabs(updatedTabs);
  };

  const keyDownHandler = (e) => {
    const activeTab = tabs.findIndex(t => t.selected);
    const allTabs = tabs.map(t => ({
      ...t,
      hidden: true,
      selected: false,
    }));

    switch (true) {
      case (e?.keyCode === 37): {
        const idx = activeTab - 1;
        if (idx >= 0) {
          allTabs[idx].hidden = false;
          allTabs[idx].selected = true;
          setTabs(allTabs);
        }
        return;
      }
      case (e?.keyCode === 39): {
        const idx = activeTab + 1;
        if (idx <= allTabs.length -1) {
          allTabs[idx].hidden = false;
          allTabs[idx].selected = true;
          setTabs(allTabs);
        }
        return;
      }
      default: {
        return;
      }
    }
  };

  useWindowUnloadEffect(() => localStorage.setItem('iresstabs', JSON.stringify(tabs)), true);

  useEffect(() => {
    if (localStorage.getItem('iresstabs') === null) {
      localStorage.setItem('iresstabs', JSON.stringify(tabs));
    } else {
      setTabs(jsonParse(localStorage.getItem('iresstabs')));
    }
  }, []);

  return (
    <div className="tabs" data-testid="div-tabs">
      <div role="tablist" aria-label="Some Label Here" data-testid="div-tablist">
        {
          tabs.map(t => (
            <TabList
              ariaControls={`${t.controls}-tab`}
              ariaSelected={`${t.selected}`}
              clickHandler={tabHandler}
              id={t.id}
              key={t.key}
              keyDown={keyDownHandler}
              label={t.label}
            />
          ))
        }
      </div>
      {
        tabs.map(t => (
          <TabPanel
            ariaLabelledBy={t.id}
            content={t.content}
            id={`${t.id}-tab`}
            hidden={t.hidden}
            key={t.key}
          />
        ))
      }
    </div>
  );
}

export default Tabs;