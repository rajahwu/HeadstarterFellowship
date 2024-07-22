export default function SheetContent({children, side=""}) { return (
    <div className={`sheet-content ${side}`}>
    {children}
  </div>
); }
