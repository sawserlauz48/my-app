import TabListComponent from "./TabListComponent";

const TabComponent = ({ tabArr, onClick }) => {
  // Recursion to find the innerText of the element
  const handleRadioBtnClick = (event) => {
    onClick(event);
  };
  return (
    <div className="border-b border-lightmode-pBtn dark:border-gray-700">
      <ul className="flex text-sm font-medium  text-gray-500 dark:text-gray-400">
        {tabArr.map((tab) => (
          <TabListComponent
            title={tab.title}
            key={tab.title}
            icon={tab.icon}
            name={"display"}
            onClick={handleRadioBtnClick}
          ></TabListComponent>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
