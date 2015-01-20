define(["backbone", "adlist/itemModel"],
		function(Backbone, ItemModel){	
    var ListingCollection = Backbone.Collection.extend({
    	url: '/fetchImages',
    	model : ItemModel
    });
    return ListingCollection;
});