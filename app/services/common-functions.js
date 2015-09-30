import Ember from 'ember';

export default Ember.Service.extend({
	checkRepeatInList(item, list)
	{
		for (var i = 0 , len = list.length; i < len ; i++)
		{
			if (item == list[i])
			{
				return true;
			}
		}
		return false;
	},
	isNullUndefinedEmpty(value)
	{
		if (value == undefined || value == null || value == '')
		{
			return true;
		}
		return false;
	}
});
