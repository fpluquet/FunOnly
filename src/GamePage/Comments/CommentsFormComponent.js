import {useContext, useEffect, useRef} from "react";
import {useGame} from "../useGame";


export function CommentsFormComponent() {
  const {game, sendComment} = useGame()
  const commentTextArea = useRef()
  async function onSubmit(e) {
    e.preventDefault()
    const comment = commentTextArea.current.value
    console.log("onSubmit", game, comment)
    sendComment(comment)
    commentTextArea.current.value = ""
  }

  return (
    <div
      className={"flex-col w-full mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3"}>
      <div class="flex mx-auto items-center justify-center">
        <form class="w-full bg-white rounded-lg">
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                ref={commentTextArea}
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="comment" placeholder='Allez, commente !' required></textarea>
            </div>
            <div class="w-full md:w-full flex justify-end md:w-full px-3">
              <input type='submit'
                     onClick={onSubmit}
                     class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                     value='Poster un commentaire'/>
            </div>
          </div>
        </form>
      </div>
    </div>)
}
