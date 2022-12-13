'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked post number ' + this.props.postID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.contenitore_bottone_like')
.forEach(domContainer => {
  // Read the post ID from a data-* attribute.
  const postID = parseInt(domContainer.dataset.postid, 10);
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    e(LikeButton, { postID: postID })
  );
});