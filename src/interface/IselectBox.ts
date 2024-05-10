interface keys {
  name: string;
}
interface ISelectBox {
  palaceHolder: string;
  option: keys[];
  selected: keys;
  setSelected: (e: any) => void;
  className?:any;
  classNameLabel?:any;
  classNamePHolder?:any;
  label?:any;
  classNameOption?:any
  classNameLi?:any
}
