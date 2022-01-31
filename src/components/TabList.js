const TabList = ({
  ariaControls,
  ariaSelected,
  clickHandler,
  id,
  keyDown,
  label,
}) => {
  return (
    <button
      autoFocus
      aria-controls={`${ariaControls}-tab`}
      aria-selected={`${ariaSelected}`}
      data-testid={`btn-tabs${id}`}
      id={id}
      onClick={clickHandler}
      onKeyDown={keyDown}
      role="tab"
    >
      {label}
    </button>
  );
}

export default TabList;