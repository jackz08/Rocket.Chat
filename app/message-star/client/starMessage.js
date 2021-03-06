import { Meteor } from 'meteor/meteor';
import { settings } from '/app/settings';
import { ChatMessage, Subscriptions } from '/app/models';

Meteor.methods({
	starMessage(message) {
		if (!Meteor.userId()) {
			return false;
		}
		if (Subscriptions.findOne({ rid: message.rid }) == null) {
			return false;
		}
		if (!settings.get('Message_AllowStarring')) {
			return false;
		}
		return ChatMessage.update({
			_id: message._id,
		}, {
			$set: {
				starred: !!message.starred,
			},
		});
	},
});
