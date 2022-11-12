import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  //throw new Error('Error al cargar los comentarios')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Comments({ params }) {

  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image alt={comment.name} src={`https://unavatar.io/${comment.email}`} width='50' height='50'/>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}