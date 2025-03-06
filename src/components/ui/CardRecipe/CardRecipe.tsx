import Image from "next/image";

interface PropTypes {
  dataRecipe: IRecipe;
}

const CardRecipe = (props: PropTypes) => {
  const { dataRecipe } = props;
  return (
    <div className="card w-full bg-base-100">
      <figure className="w-full relative">
        <Image
          className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"
          src={dataRecipe?.image}
          alt="recipe image"
          width={500}
          height={300}
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">{dataRecipe?.portion} Porsi</div>
      </figure>
      <div className="card-actions justify-start px-2 py-2 lg:px-8">
        <div className="badge badge-outline">{dataRecipe?.nutrition?.calories} kalori</div>
        <div className="badge badge-outline">{dataRecipe?.nutrition?.protein} protein</div>
        <div className="badge badge-outline">{dataRecipe?.nutrition?.carbohydrates} karbohidrat</div>
        <div className="badge badge-outline">{dataRecipe?.nutrition?.fat} lemak</div>
      </div>
      <div className="card-body px-2 lg:px-8 pt-2">
        <h1 className="card-title">{dataRecipe?.title}</h1>
      </div>
    </div>
  );
};

export default CardRecipe;
