## What's new on GPTPro ?
 
## What's New in Version 3.0.0

Here's what we've updated in this version: 

### Bug Fixes 
1. **Database Connection Issues:** We have resolved the issue that was intermittently disrupting service.
2. **Responsive UI:** Fixed the unresponsive buttons on specific screen resolutions.
3. **Monthly Reports:** Corrected the incorrect data displayed in the monthly report section.

### New Features: 
1. **Third-Party API:** We have integrated a third-party API for enhanced data analytics.
2. **Dark Mode:** Enjoy an improved user experience while experiencing our sleek new dark mode.
python
# To reverse the doubly linked list in one pass, you need to traverse it only once while rearranging the pointers as below:
def reverse_list(head):
    prev = None # initialize
    curr = None # pointers
    nxt = head  # for
                 # traversal
    while nxt != None:
        curr = nxt
        nxt = nxt.next
        curr.next = prev
        curr.prev = nxt
        prev = curr
    head = curr
    return head
python
# Example

head = Node(5)
l = LinkedList()
l.append(Node(10))
l.append(Node(15))
l.append(head)

# print the list
l.traverselist()

print()

# reverse the list
l.head = reverse_list(head)

# print the new list
l.traverselist()

10  15  5

5  15  10
python
class Hashtable:
   
