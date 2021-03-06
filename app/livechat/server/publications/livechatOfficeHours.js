import { Meteor } from 'meteor/meteor';
import { hasPermission } from '/app/authorization';
import { LivechatOfficeHour } from '/app/models';

Meteor.publish('livechat:officeHour', function() {
	if (!hasPermission(this.userId, 'view-l-room')) {
		return this.error(new Meteor.Error('error-not-authorized', 'Not authorized', { publish: 'livechat:agents' }));
	}

	return LivechatOfficeHour.find();
});
