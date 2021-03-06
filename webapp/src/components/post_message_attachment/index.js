import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPost} from 'mattermost-redux/selectors/entities/posts';

import {getUserInfo} from 'selectors';
import {hideTranslatedMessage} from 'actions';

import PostMessageAttachment from './post_message_attachment';

const mapStateToProps = (state, ownProps) => {
    const userInfo = getUserInfo(state) || {};
    const post = getPost(state, ownProps.postId);
    return {
        activated: userInfo.activated,
        translation: post.translation || {},
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    hide: hideTranslatedMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostMessageAttachment);
