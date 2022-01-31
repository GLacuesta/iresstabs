import { nanoid } from "nanoid";

const TabPanel = ({
  ariaLabelledBy,
  content,
  id,
  hidden,
}) => {
  if (hidden) {
    return (
      <div
        aria-labelledby={ariaLabelledBy}
        id={id}
        hidden
        role="tabpanel"
        tabIndex="0"
      >
        {
          content &&
            Object.keys(content)?.map(i => {
              return (
                <p
                  className={`text-${i === 'header' ? 'large' : 'medium'}`}
                  key={nanoid()}
                >
                  {content[i]}
                </p>
              )
            })
        }
      </div>
    );
  }
  return (
    <div
      aria-labelledby={ariaLabelledBy}
      id={id}
      role="tabpanel"
      tabIndex="0"
    >
      {
        content &&
          Object.keys(content)?.map(i => {
            return (
              <p
                className={`text-${i === 'header' ? 'large' : 'medium'}`}
                key={nanoid()}
              >
                {content[i]}
              </p>
            )
          })
      }
    </div>
  );
}

export default TabPanel;