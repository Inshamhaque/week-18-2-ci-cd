//Exclude from a type, interface. 
type AllEvent = 'click'|'mousemove'|'click'
type ExcludeEvent = Exclude<Event,'click'>;
