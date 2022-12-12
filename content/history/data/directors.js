function director_data() {
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'director' });
    dataTable.addColumn({ type: 'string', id: 'bar label' });
    dataTable.addColumn({ type: 'string', role: 'tooltip' });
    dataTable.addColumn({ type: 'date', id: 'start' });
    dataTable.addColumn({ type: 'date', id: 'end' });

    var idNames = {
        ben: 'Ben Laurie',
        bayard: 'Henri Yandell',
        bdelacretaz: 'Bertrand Delacretaz',
        bhyde: 'Ben Hyde',
        brett: 'Brett Porter',
        brian: 'Brian Behlendorf',
        brianm: 'Brian McCallister',
        cliffs: 'Cliff Schmidt',
        clr: 'Craig Russell',
        coar: 'Ken Coar',
        curcuru: 'Shane Curcuru',
        cutting: 'Doug Cutting',
        danny: 'Danny Angus',
        dirkx: 'Dirk-Willem van Gulik',
        dkulp: 'Daniel Kulp',
        dougm: 'Doug Maceachern',
        druggeri: 'Daniel Ruggeri',
        farra: 'J Aaron Farr',
        fielding: 'Roy T. Fielding',
        geirm: 'Geir Magnusson, Jr.',
        gstein: 'Greg Stein',
        isabel: 'Isabel Drost-Fromm',
        jerenkrantz: 'Justin Erenkrantz',
        jim: 'Jim Jagielski',
        jmclean: 'Justin Mclean',
        ke4qqq: 'David Nalley',
        markt: 'Mark Thomas',
        marvin: 'Marvin Humphrey',
        mattmann: 'Chris Mattmann',
        mjc: 'Mark Cox',
        henning: 'Henning Schmiedehausen',
        lrosen: 'Larry Rosen',
        myrle: 'Myrle Krantz',
        niclas: 'Niclas Hedhman',
        noirin: 'Noirin Plunkett',
        pats: 'Patricia Shanahan',
        psteitz: 'Phil Steitz',
        randy: 'Randy Terbush',
        rasmus: 'Rasmus Lerdorf',
        rbowen: 'Rich Bowen',
        rgardler: 'Ross Gardler',
        rubys: 'Sam Ruby',
        sameer: 'Sameer Parekh',
        stefano: 'Stefano Mazzocchi',
        stoddard: 'Bill Stoddard',
        striker: 'Sander Striker',
        rvs: 'Roman Shaposhnik',
        tdunning: 'Ted Dunning',
        wave: 'Dave Fisher',
        wohali: 'Joan Touzet',
        wrowe: 'William Rowe',
    }

    function date(y, m, d) {
        // Date's month is [0..11]
        return new Date(y, m-1, d);
    }

    // NOTE: these are the dates that election results are announced,
    //   which may be two days after the meeting-start (due to
    //   adjournment for voting). Thus, these dates do not necessarily
    //   align with Annual Meeting dates.
    y1999 = date(1999, 3, 13);  // CHECK
    y2000 = date(2000, 3, 11);  // CHECK
    y2001 = date(2001, 4, 3);  // CHECK
    y2002 = date(2002, 5, 21);  // CHECK
    y2003 = date(2003, 6, 18);  // CHECK
    y2004 = date(2004, 5, 18);  // CHECK
    y2005 = date(2005, 5, 24);  // CHECK
    y2006 = date(2006, 6, 13);  // CHECK
    y2007 = date(2007, 6, 5);  // CHECK
    y2008 = date(2008, 6, 3);  // CHECK
    y2009 = date(2009, 7, 9);
    y2010 = date(2010, 7, 15);
    y2011 = date(2011, 7, 14);
    y2012 = date(2012, 5, 24);
    y2013 = date(2013, 5, 23);
    y2014 = date(2014, 5, 29);
    y2015 = date(2015, 3, 26);
    y2016 = date(2016, 3, 24);
    y2017 = date(2017, 3, 30);
    y2018 = date(2018, 3, 22);
    y2019 = date(2019, 3, 28);
    y2020 = date(2020, 4, 2);

    // Approximate the next year's meeting
    y2021 = date(2021, 4, 1);

    // Transition dates for outgoing/incoming Directors
    // fielding -> striker
    t2004 = date(2004, 1, 21);
    // bayard -> geirm
    t2010 = date(2010, 8, 18);
    // lrosen -> dkulp
    t2012 = date(2012, 3, 21);
    // gstein -> rubys
    t2016a = date(2016, 9, 21);
    // rubys -> rbowen
    t2016b = date(2016, 10, 19);
    // psteitz -> danny
    t2019a = date(2019, 5, 16);
    // jim -> tdunning
    t2019b = date(2019, 5, 16);
    // wohali -> wave
    t2019c = date(2019, 9, 26);

    function add(id, start, end) {
        var name = idNames[id];
        var y1 = start.getFullYear();
        var m1 = start.getMonth();
        var d1 = start.getDate();
        var y2 = end.getFullYear();
        var m2 = end.getMonth();
        var d2 = end.getDate();
        var tip = `${name}, from ${y1}/${m1}/${d1} to ${y2}/${m2}/${2}`;
        dataTable.addRow([id, id, tip, start, end]);
    }

    add('sameer', y1999, y2000);
    add('bhyde', y1999, y2000);
    add('randy', y1999, y2003);
    add('fielding', y1999, t2004);
    add('brian', y1999, y2005);
    add('ben', y1999, y2004);
    add('coar', y1999, y2007);
    add('dirkx', y1999, y2007);
    add('jim', y1999, y2018);
    add('dougm', y2000, y2001);
    add('rasmus', y2000, y2001);
    add('gstein', y2001, t2016a);
    add('stoddard', y2001, y2002);
    add('rubys', y2002, y2009);
    add('mjc', y2003, y2004);
    add('striker', t2004, y2007);
    add('stefano', y2004, y2006);
    add('geirm', y2004, y2005);
    add('ben', y2005, y2006);
    add('jerenkrantz', y2005, y2010);
    add('cliffs', y2006, y2007);
    add('bayard', y2006, y2008);
    add('geirm', y2007, y2010);
    add('farra', y2007, y2009);
    add('wrowe', y2007, y2009);
    add('henning', y2007, y2009);
    add('bdelacretaz', y2008, y2009);
    add('fielding', y2009, y2014);
    add('brett', y2009, y2010);
    add('brianm', y2009, y2010);
    add('cutting', y2009, y2015);
    add('curcuru', y2009, y2012);
    add('bdelacretaz', y2010, y2019);
    add('rubys', y2010, y2016);
    add('bayard', y2010, t2010);
    add('geirm', t2010, y2011);
    add('noirin', y2010, y2011);
    add('brett', y2011, y2019);
    add('lrosen', y2011, t2012);
    add('dkulp', t2012, y2012);
    add('rbowen', y2012, y2013);
    add('rgardler', y2012, y2013);
    add('curcuru', y2013, y2014);
    add('mattmann', y2013, y2018);
    add('rgardler', y2014, y2015);
    add('rbowen', y2014, y2016);
    add('curcuru', y2015, y2021);
    add('ke4qqq', y2015, y2016);
    add('marvin', y2016, y2017);
    add('markt', y2016, y2019);
    add('isabel', y2016, y2017);
    add('rubys', t2016a, t2016b);
    add('rbowen', t2016b, y2020);
    add('tdunning', y2017, y2019);
    add('psteitz', y2017, t2019a);
    add('danny', t2019a, y2020);
    add('isabel', y2018, y2019);
    add('rvs', y2018, y2020);
    add('myrle', y2019, y2020);
    add('druggeri', y2019, y2020);
    add('clr', y2019, y2021);
    add('jim', y2019, t2019b);
    add('tdunning', t2019b, y2020);
    add('wohali', y2019, t2019c);
    add('wave', t2019c, y2020);
    add('bdelacretaz', y2020, y2021);
    add('fielding', y2020, y2021);
    add('niclas', y2020, y2021);
    add('jmclean', y2020, y2021);
    add('rubys', y2020, y2021);
    add('pats', y2020, y2021);
    add('striker', y2020, y2021);

    return dataTable;
}
