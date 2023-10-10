import {CommentsItemComponent} from "./CommentsItemComponent";
import {CommentsFormComponent} from "./CommentsFormComponent";

export function CommentsComponent({
                                     gameData
                                   }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div className="h1 font-bold">Commentaires</div>
        <section class="relative flex items-center justify-center mb-16 bg-white bg-gray-100 min-w-screen">
          <div class="container px-0 mx-auto sm:px-5">

            {gameData.comments.map((comment) => (
              <CommentsItemComponent key={comment} comment={comment}/>
            ))}
            <CommentsFormComponent/>
          </div>
        </section>
      </div>
    </div>

  )
}
