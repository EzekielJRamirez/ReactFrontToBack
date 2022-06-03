import PropTypes from 'prop-types'
import Card from "./shared/Card"
// these imports only worked for me when I 
// capitalized the card file and updated all
// calls to it

function Feedbackitem({item}) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem
