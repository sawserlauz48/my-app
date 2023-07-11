import imagePlace from "../images/DSC_2460.JPG";

const Listcomponent = ({ image, name, description, price }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-lightmode-text dark:text-darkmode-text">
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead> */}
        <tbody>
          <tr className=" shadow-lg bg-lightmode-bg border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:border-blue-900 dark:hover:bg-blue-900">
            <td className="w-32 p-4">
              <img src={imagePlace} alt="Apple Watch" />
            </td>
            <td className=" font-bold text-lg px-6 py-4 text-gray-900 dark:text-white">
              niskander kebab
            </td>
            <td className="px-6 py-4 text-slate-500 dark:text-slate-500">
              description: is it with bread yes and yugort
            </td>
            <td className="px-6 py-4 text-slate-900 dark:text-slate-300">
              $599
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Listcomponent;
