
// 1. Type Assertion

// One note to consider -> a type should on be asserted by its super-type or sub-type
// for example, number cannot assert string

function formatInput(input: string) {
  return input
}

function getUserInput(): string | number {
  return 'user'
}

let input = getUserInput()


formatInput(input as string)
formatInput(input as 'hello')

// same as 'as'
// this is not recommended to avoid confusion with TSX syntax.
formatInput(<string>input)

// 2. Nonnull Assertion

// nonNull assertion -> !

type Dialog = {
  id?: string
}

function closeDialog(dialog: Dialog) {
  if (!('id' in dialog)) {
    return
  }
  setTimeout(() =>
    removeFromDOM(
      dialog,
      document.getElementById(dialog.id!)!
    )
  )
}

function removeFromDOM(dialog: Dialog, element: Element) {
  element.parentNode!.removeChild(element)

  delete dialog.id
}

let userId: string = 'austin lee'

userId.toUpperCase()

userId.toString()