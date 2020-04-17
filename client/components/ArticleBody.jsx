import React from 'react'

class ArticleBody extends React.Component {
  render () {
    const { image, words } = this.props
    return (
      <div className="pageBody">
        <div className="articleSideBar">
          <img src="/images/sidebar-ad.png" />
          <div className="mostPop">
          <img src="/images/Mostpopular.png" />
          </div>
        </div>
        <div className="articleBodyDiv">
          <h1 className="headLine">Enspiral Dev Academy Exposed For Suspicious Activities</h1>
          <h2 className="authorName">Author: {words.author} </h2>
          <div className="articleImage">
            <img src={image} alt={image} />
          </div>
          <p className="paragraph"> Breaking news! Students at Enspiral Dev Academy have noticed some <span className='to-lower-case'>{words.adj1}</span> goings on surrounding their teacher Don Smith. Smith has been suspected of receiving <span className='to-lower-case'>{words.pln1}</span> from the linux foundation in exchange for pushing the <span className='to-lower-case'>{words.adj2}</span> agenda of the Mozilla Corporation.
          </p>
          <p className="paragraph">
            Mozilla has been exposed for attempting to brainwash <span className ='to-lower-case'>{words.pln2}</span> into using Firefox instead of Chrome, which everybody knows is extremely <span className='to-lower-case'>{words.adj3}</span>.
          </p>
          <p className="paragraph">
           Bob Ross has come forward this week about Smiths activities and was quoted saying “This is no longer a happy little accident. We have reason to believe Don was at {words.place1} with <span className='capitalise'>{words.name1}</span> and <span className='to-lower-case'>{words.noun1}</span> were exchanged, we think to further his understanding of SuperCollider”.
          </p>
          <p className="paragraph">
            A {words.noun2} on the scene had this to say: “It was all so <span className='to-lower-case'>{words.adj4}</span>. We tried to <span className='to-lower-case'>{words.verbpresent}</span> but the Linux start sound will haunt me for the rest of my life. Another witness claimed that it reminded him of that one time that <span className='capitalise'>{words.name2}</span>’s <span className='to-lower-case'>{words.noun3}</span> <span className='to-lower-case'>{words.verbpast}</span>.
          </p>
          <p className="paragraph">
            JO$EPH QUE$TED is currently being held for questioning at the {words.place2} police station. Police have refused to comment claiming that the <span className='to-lower-case'>{words.noun4}</span> committee  is <span className='to-lower-case'>{words.verbpresent}</span> this very closely, but the situation is still under investigation. Jacinda Ardern has urged the <span className='to-lower-case'>{words.pln2}</span> to stop panic buying <span className='to-lower-case'>{words.noun5}</span>. “For the love of <span className='to-lower-case'>{words.pln3}</span> just stop.”
          </p>

        </div>
      </div>
    )
  }
}
export default ArticleBody
