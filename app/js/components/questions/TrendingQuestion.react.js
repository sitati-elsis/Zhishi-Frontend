import React from 'react'
import Common from '../../utils/Common.js'

class TrendingQuestion extends React.Component {
  constructor(props, context) {
    super(props)
  }

  render () {
    var question = this.props.question;
    var permalink = Common.createPermalink(question.id, question.title);
    return (
      <div className="ui grid trending-link item">
        <div className="two wide column">
          <i className="comment outline icon"></i>{question.answers_count}
        </div>

        <div className="question_title wide column">
          <p>
            <a href={`/questions/${permalink}`}>{ question.title || "No title"}</a>
          </p>
        </div>
      </div>
    )
  }
}
export default TrendingQuestion;
