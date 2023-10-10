export function CommentsItemComponent({comment}) {
  return (
    <div
      className="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
      <div className="flex flex-row md-10"><img className="w-12 h-12 border-2 border-gray-300 rounded-full"
                                                alt="Anonymous's avatar"
                                                src={comment.author.avatar}/>
        <div className="flex-col mt-1">
          <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.author.name}<span
            className="ml-2 text-xs font-normal text-gray-500">{comment.date}</span></div>
          <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
            {comment.text}
          </div>
          <button className="inline-flex items-center px-1 -ml-1 flex-column">
            <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
