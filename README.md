jquery.planner
==============

jquery plugin for creating plan or schedule
![capture](http://gdurl.com/8FjE)

Code Example
=============
how to use:
```javascript
	$('selector').jPlanner(Data,[Options]);
	/* 
	data : array of object
	options: array of object
	*/
	
```
Example html:
  ```html
  <div id="planner" style=""></div>
  ```
  javascript
  ```javascript
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
			bgcolor: '#cc7700',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			id: 3, 
			name: "Prepare design",
			start: new Date(2014,9,16),
			end: new Date(2014,9,21),
		}
  ];
  $(document).ready(function(){
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
  * showDesc: boolean, (show description in tooltip ?)
  * showTooltipName: boolean, (show event name in tooltip ?)
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
      id: number, // not used for now
      name: 'string', // event name
      start: 'yyyy-mm-dd'/date,
      end: 'yyyy-mm-dd'/date,
      color: 'string', // font color
      bgcolor: 'string', // background color
	  desc: 'string' // show in tooltip
    },
  ]
```
CSS
=====
CSS class:
```css
	.jplanner-table{} // event table
	.jplanner-plan{} // event row
	.jplanner-event{} // event date
	
```
License
=======
MIT license
