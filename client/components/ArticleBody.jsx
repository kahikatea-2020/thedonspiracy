import React from 'react'

class ArticleBody extends React.Component {
  render () {
    const { image, words } = this.props
    return (
      <div className="pageBody">
        <div className="articleSideBar">
          <img src="/images/sidebar-ad.png" />
        </div>
        <div className="articleBodyDiv">
          <img src={image} alt={image} />
          <h1 className="headLine">Enspiral Dev Academy Exposed For Suspicious Activities</h1>
          <h2 className="authorName">Author: {words.author} </h2>
          <p className="paragraph"> Breaking news! Students at Enspiral Dev Academy have noticed some {words.adj1} goings on surrounding their teacher Don Smith. Smith has been suspected of receiving {words.pln1} from the linux foundation in exchange for pushing the {words.adj2} agenda of the Mozilla Corporation.
          </p>
          <p className="paragraph">
            Mozilla has been exposed for attempting to brainwash {words.pln2} into using Firefox instead of Chrome, which everybody knows is extremely {words.adj3}.
          </p>
          <p className="paragraph">
           Bob Ross has come forward this week about Smiths activities and was quoted saying “This is no longer a happy little accident. We have reason to believe Don was at {words.place1} with {words.name1} and {words.noun1} were exchanged, we think to further his understanding of SuperCollider”.
          </p>
          <p className="paragraph">
            A {words.noun2} on the scene had this to say: “It was all so {words.adj4}. We tried to {words.verbpresent} but the Linux start sound will haunt me for the rest of my life. Another witness claimed that it reminded him of that one time that {words.name2}’s {words.noun3} {words.verbpast}.
          </p>
          <p className="paragraph">
            JO$EPH QUE$TED is currently being held for questioning at the {words.place2} police station. Police have refused to comment claiming that the {words.noun4} committee  is {words.verbpresent} this very closely, but the situation is still under investigation. Jacinda Ardern has urged the {words.pln2} to stop panic buying {words.noun5}. “For the love of {words.pln3} just stop.”
          </p>

        </div>
      </div>
    )
  }
}
export default ArticleBody
