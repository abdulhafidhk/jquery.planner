jquery.planner
==============

jquery plugin for creating plan or schedule

Code Example
=============
  html:
  ```html
  <div id="planner" style=""></div>
  ```
  javascript
  ```javascript
  javascript: 
  data = [
    {
			id: 1, 
			name: "Desain 1",
			start: "2014-10-14",
			end: "2014-10-16",
			bgcolor: '#0077cc'
		},
		{
			id: 2, 
			name: "Design 2",
			start: "2014-10-14",
			end: "2014-10-20",
			bgcolor: '#cc7700'
		},
		{
			id: 3, 
			name: "Prepare design",
			start: new Date(2014,9,16),
			end: new Date(2014,9,21),
		}
  ];
  $(document).ready(function(){
		var now = new Date();
		$("#planner").jPlanner(data,{
			startDate: "2014-10-1",
			endDate: "2014-11-15"
		});
	});
```
Options
=======
  * name: string, 
  * showEventDate: boolean, (show event date ?)
  * dataClass: string, (add event class)
  * color: string, (event font color default: #ffffff)
  * bgcolor: string, (event background color default: #73B85E)
  * startDate: string/date,
  * endDate: string/date

Data structure
==============
```javascript
  array_of_object = [
    {
      id: number, #not used for now
      name: 'string', #event name
      start: 'yyyy-mm-dd'/date,
      end: 'yyyy-mm-dd'/date,
      color: 'string', #font color
      bgcolor: 'string', #background color
    },
  ]
```

License
=======
MIT license
