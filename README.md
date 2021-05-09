## Recursive javascript

Common functions implemented using recursion

---

### Implemented:

- map
- filter
- flatten
- reverse


### How is the idea?

I tried to follow the haskell way, which is basically:

- base case
- recursive case


So, almost always we'll have:

- empty list
- list with elements

(`flatten` is a special case, take a look at the file  😉 )

For empty list, we don't do anything. For the case of the list with elements, we separate into first element and the rest. We _do_ something to the first element, and call the recursion to complete rest. And voila!


![Map explained](https://raw.githubusercontent.com/alejandrosobko/recursive-javascript/main/map_explained.png)
---



### Suggestions?

Please create an issue!
