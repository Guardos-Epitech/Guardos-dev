IRestoDetailOverlayProps:
-------------------------

```java
interface IRestoDetailOverlayProps {
  isOpen: boolean,
  title?: string,
  children: ReactNode,
  onClose: () => void
}
```

ScrollOverlay:
--------------

```java
const ScrollOverlay = (props: IRestoDetailOverlayProps) => {
  const {isOpen, title, children} = props;

  const handleClose = () => {
    props.onClose();
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        scroll={'paper'}
        fullWidth
        maxWidth="lg"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {title ? <DialogTitle id="scroll-dialog-title">{title}</DialogTitle> : null}
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
```