sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trav/ust/pt/travproc/test/integration/FirstJourney',
		'trav/ust/pt/travproc/test/integration/pages/TravelList',
		'trav/ust/pt/travproc/test/integration/pages/TravelObjectPage',
		'trav/ust/pt/travproc/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trav/ust/pt/travproc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);