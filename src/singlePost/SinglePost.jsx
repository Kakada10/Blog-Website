import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular singlePostIcon fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid singlePostIcon fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Kakada</b>
          </span>
          <span className="singlePostDate">
            <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nihil aperiam numquam in minima nulla fugit, placeat quae, labore autem ad reprehenderit, sit vero enim accusamus quo hic eos iste.
          Quaerat earum nulla aperiam quia atque exercitationem voluptatem, labore libero reiciendis voluptatibus nesciunt ipsam omnis alias eaque voluptatum, magnam asperiores, tenetur rem blanditiis quidem inventore repellat quisquam! Ipsam, similique voluptatum!
          Neque inventore fugiat in optio velit at, doloremque fugit minima, voluptas necessitatibus eum! Obcaecati ad animi voluptatibus repellat deserunt tenetur natus dolore provident, voluptate, enim, voluptatem ab laboriosam? Accusamus, aspernatur?
          Laboriosam nihil quaerat rem perferendis in cum voluptate. Totam voluptate maxime minima veritatis facere voluptatum iure itaque, officia dignissimos hic ab nemo officiis delectus recusandae perferendis repellat adipisci, consequuntur unde!
          Dignissimos laborum, reiciendis sit ut assumenda accusamus cupiditate iste quidem libero placeat possimus eligendi fugit aspernatur a similique est dolores aut id iusto obcaecati ipsa neque? Odio ullam quos nesciunt!
          Eveniet praesentium earum doloribus quod est expedita voluptatem impedit, assumenda alias itaque eaque debitis similique iste tempore fugit error accusamus cupiditate dolorum possimus facere ullam nostrum ea! Non, repudiandae officiis.
        </p>
      </div>
    </div>
  );
}
