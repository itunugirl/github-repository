import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meal = () => {
  const { meals, loading,selectedMeal,addToFavorite } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meal match your search term. Please try again</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals?.map((singleMeal) => {
        // console.log(meals);
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;

        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt={title}
              className="img"
              style={{ width: "300px" }}
              onClick={() => selectedMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <BsHandThumbsUp onClick={()=>addToFavorite(idMeal)}/>
              </button>
            </footer>
          </article>
        );
      
      })}

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis, quos voluptatem distinctio sed vero natus quod tempore? In fuga eveniet perferendis, facilis vel veniam tenetur sequi alias illo ut.
      Adipisci neque, dignissimos, accusamus officiis, aut deserunt cupiditate saepe ratione odio nostrum omnis ex? Accusamus ratione repellendus nostrum sit nisi, placeat ea saepe consequatur quasi voluptates culpa rerum accusantium fugit.
      Velit quam iste iure, provident aperiam hic repudiandae corporis quod asperiores cumque, dolore consequuntur placeat. Tempore, eius magni vitae impedit explicabo, perferendis ut soluta est ipsa beatae provident pariatur nostrum?
      Pariatur blanditiis dolorum in quis ullam exercitationem quas laborum alias voluptatem, eum totam. Perspiciatis, aliquid non, odio eveniet reprehenderit ab at aut ea qui, ex deleniti quod temporibus nostrum earum?
      Eveniet cumque quidem eum tempora sapiente id doloribus inventore praesentium provident magnam, ducimus dolorem assumenda pariatur perspiciatis dolor dicta repudiandae odio accusamus officia ad sit a ut? Architecto, saepe totam.
      Esse vitae nihil consequuntur delectus ipsum eos, porro, fugiat illo, architecto odio similique suscipit fugit inventore autem temporibus consectetur possimus saepe distinctio molestias molestiae corporis sint tempora aperiam soluta. Recusandae?
      Labore eligendi ipsa eum eius quos. Cupiditate adipisci deleniti voluptas laboriosam est natus nihil ipsa quaerat? Ea nostrum temporibus similique nihil soluta quae molestias velit dolorum tempora impedit, inventore perspiciatis?
      Ex, fugiat consequuntur quam iste officiis facilis distinctio odit voluptatibus voluptate ipsa, reiciendis dolor nam temporibus. Dicta, eveniet porro? Laboriosam eligendi accusamus neque, vitae voluptates nihil sequi sint veniam. Maxime!
      Nihil at odio ratione eum incidunt tempore sunt soluta est nisi ad rem repellat accusamus ex laboriosam deserunt possimus similique maxime, culpa ab corporis reiciendis corrupti iste quibusdam. Molestiae, dicta!
      Voluptas necessitatibus quas saepe tempora ipsum similique distinctio nihil ea velit accusamus nesciunt cumque reprehenderit quisquam, earum numquam illo labore, eaque ullam sint doloremque autem. Quisquam explicabo veniam eum voluptatem?
      Fugit labore ea quo odit dignissimos nesciunt voluptas corrupti laboriosam ipsum, dolor rem repellat eos, rerum ut aperiam error architecto. Aspernatur ab illo, quis laboriosam nemo ipsum saepe corrupti fugiat?
      Temporibus est officiis ipsum nobis optio deserunt sapiente consequatur enim excepturi dolor sequi porro autem non saepe, sunt dignissimos in minima voluptatibus, doloribus beatae itaque ullam similique. Aspernatur, laudantium. Sed?
      Tempore omnis at dolores voluptatibus velit blanditiis voluptate atque dolorem impedit reprehenderit! Asperiores odit ullam, expedita itaque placeat veritatis iusto quam nostrum voluptatum sequi, maxime aliquam enim? Vero, consequatur ad!
      Quam aperiam doloremque rerum quaerat amet error, est voluptatibus, dolorem aspernatur, accusantium et dolores! Libero natus, tempore debitis, alias reprehenderit ex quaerat doloribus qui, deleniti corrupti fuga fugiat blanditiis aliquam?
      Soluta aut laboriosam velit tempore unde, voluptatibus dolorem id rerum dolor quaerat expedita libero repudiandae quod maiores molestiae voluptate odio rem perspiciatis laudantium itaque vel. Excepturi illo veritatis optio esse!
      Quam mollitia veniam perferendis aspernatur sit hic. Ipsum quisquam, iure maiores soluta illo quo asperiores hic ut sapiente quae voluptatem saepe eos nisi. Perferendis reiciendis suscipit quibusdam hic illum quia.
      Illum labore repellendus nihil, iusto perferendis enim asperiores, hic odit dolore sit tempora, voluptates veniam quod dolorem adipisci velit perspiciatis corrupti. Sint placeat commodi ratione cum? Commodi laboriosam velit deserunt.
      Inventore magni commodi fugiat laborum? Soluta, est perferendis, minus iste expedita reiciendis exercitationem quaerat id dolor non quos natus laboriosam blanditiis eos, temporibus ut ducimus. Quibusdam quasi libero unde rem.
      Et, exercitationem obcaecati. Dolorem ea tenetur fugit optio corporis corrupti quidem cum, facilis minima ipsum? Error tempore exercitationem enim doloribus similique distinctio reprehenderit, itaque delectus cum rerum maiores vel quisquam.
      Illo perspiciatis libero aliquam deleniti, dolore consequatur velit voluptatum fugiat esse rem. Exercitationem vitae officiis facilis, accusamus illo laudantium veniam quia consequuntur, esse doloribus repudiandae voluptatibus minima voluptate iusto. Numquam.</p>
    </section>
  );
};

export default Meal;
