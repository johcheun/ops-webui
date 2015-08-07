/*
 * Mock VLAN resources.
 * @author Frank Wood
 */

module.exports = function(app) {

    var setHdr = function(res) {
        res.setHeader('Content-Type', 'application/json');
    }

    var vlans = [
        {
            id: 1,
            name: 'VLAN1',
            untagged: [
                '1-20,22,24'
            ],
            tagged: [
                '40'
            ],
            access: [
                '41'
            ],
            trunk: [
                '42'
            ],
            all: [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,40,41,42
            ]
        },
        {
            id: 2,
            name: 'VLAN2',
            untagged: [
                '21,23,25-30'
            ],
            tagged: [
                '31'
            ],
            access: [
                '22,24,32'
            ],
            trunk: [
                '33'
            ],
            all: [
                21,23,25,26,27,28,29,30,31,22,24,32,33
            ],
        },
        {
            id: 3,
            name: 'VLAN3',
            untagged: [
                '33'
            ],
            tagged: [
                '50'
            ],
            access: [
                '51'
            ],
            trunk: [
                '52'
            ],
            all: [
                33,50,51,52
            ]
        },
        {
            id: 4,
            name: 'VLAN4',
            untagged: [
                '35-40'
            ],
            tagged: [
                '41'
            ],
            access: [
                '42'
            ],
            trunk: [
                '43'
            ],
            all: [
                35,36,37,38,39,40,41,42,43
            ]
        }
    ];

    app.get('/ui/vlans', function (req, res) {
        setHdr(res);
        res.send(JSON.stringify(vlans));
    });
}
