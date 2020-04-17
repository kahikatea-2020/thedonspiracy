import React from 'react'

class ArticleBody extends React.Component {
  render () {
    const { image, words } = this.props
    return (
      <div className="pageBody">
        <div className="articleSideBar">
          <img src="./images/sidebar-ad.png" />
          <div className="articleBodyDiv">
            <img src={image} />
            <h1 className="headLine">Enspiral Dev Academy Exposed For Suspicious Activities</h1>
            <h2 className="authorName">Author: AuthorName </h2>
            <p className="paragraph"> Breaking news! Students at Enspiral Dev Academy have noticed some {words.adj1} goings on surrounding their teacher Don Smith. Smith has been suspected of receiving --- from the linux foundation in exchange for pushing the {words.adj2} agenda of the Mozilla Corporation.
            </p>
            <p className="paragraph">
            Mozilla has been exposed for attempting to brainwash ---- into using Firefox instead of Chrome, which everybody knows is extremely ---.
            </p>
            <p className="paragraph">
           Bob Ross has come forward this week about Smiths activities and was quoted saying “This is no longer a happy little accident. We have reason to believe Don was at ---- with --- and --- was exchanged, we think to further his understanding of SuperCollider”.
            </p>
            <p className="paragraph">
            A --- on the scene had this to say: “It was all so ---. We tried to --- but the Linux start sound will haunt me for the rest of my life. Another witness claimed that it reminded him of that one time that ----’s ---- ----.
            </p>
            <p className="paragraph">
            JO$EPH QUE$TED is currently being held for questioning at the --- police station. Police have refused to comment claiming that the --- committee  is ---- this very closely, but the situation is still under investigation. Jacinda Ardern has urged the --- to stop panic buying----. “For the love of ---- - just stop.”
            </p>

          </div>
        </div>
      </div>
    )
  }
}
export default ArticleBody
