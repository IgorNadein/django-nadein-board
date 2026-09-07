import test from 'node:test';
import assert from 'node:assert/strict';
import {filterTasks} from './filters.ts';
const filters={priority:'',assignee:'',label:'',due:'',status:''};
const tasks=[{id:1,title:'Spec',description:'API',priority:'high',assignee:{id:7},labels:[{id:3,name:'backend'}],due_date:'2026-09-07',completed_at:null,is_archived:false},{id:2,title:'Done',description:'',priority:'low',assignee:null,labels:[],due_date:'2026-09-07',completed_at:'2026-09-07',is_archived:false},{id:3,title:'Archive',description:'',labels:[],is_archived:true}];
test('combined filters match label text, owner, priority and unfinished overdue cards',()=>{assert.deepEqual(filterTasks(tasks,'backend',{...filters,assignee:'me',priority:'high',label:'3',due:'overdue'},7,new Date(2026,8,8)).map(t=>t.id),[1]);});
test('completed cards are not overdue, archived cards never enter canvas',()=>{assert.deepEqual(filterTasks(tasks,'',filters,7).map(t=>t.id),[1,2]);assert.deepEqual(filterTasks(tasks,'',{...filters,status:'done',due:'overdue'},7,new Date(2026,8,8)),[]);});
