import PropTypes from "prop-types";

const CardComponent = ({ name, price, description, img, id }) => {
  return (
    <div className=" rounded-lg  shadow-lg border dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px]border-slate-50 bg-lightmode-bg border-slate-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:hover:bg-blue-900">
      <a href="#">
        <img className="rounded-t-lg w-full" src={img} alt={name} />
      </a>
      <div className="cardP p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lightmode-text dark:text-darkmode-text">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-slate-500 dark:text-slate-500">
          {description}
        </p>
        <p
          className="mt-auto font-normal text-slate-900 dark:text-slate-300
        "
        >
          {price}₪
        </p>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  canEdit: PropTypes.bool,
};

CardComponent.defaultProps = {
  img: "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg",
  alt: "",
  canEdit: false,
};

export default CardComponent;
