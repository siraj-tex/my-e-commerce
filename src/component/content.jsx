import React, { useState } from 'react'
import Card from '../component/card'
import image from '../assets/image.png'

function Content() {
  const allItems = [
    { id: 1, title: 'Card Title 1', desc: 'Description for card 1.', image },
    { id: 2, title: 'Card Title 2', desc: 'Description for card 2.', image },
    { id: 3, title: 'Card Title 3', desc: 'Description for card 3.', image },
    { id: 4, title: 'Card Title 4', desc: 'Description for card 4.', image },
    { id: 5, title: 'React Development', desc: 'Learn React best practices.', image },
    { id: 6, title: 'JavaScript Tips', desc: 'Advanced JS techniques.', image }
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState(allItems)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestions = allItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = () => {
    const filtered = allItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredItems(filtered)
    setShowSuggestions(false)
  }

  const handleInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
      setFilteredItems(allItems)
    }
  }

  const handleSuggestionClick = (item) => {
    setSearchQuery(item.title)
    setFilteredItems([item])
    setShowSuggestions(false)
  }

  return (
    <div className='content'> 
      <div className='search'>
        <input
          type="text"
          placeholder='Search...'
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => searchQuery && setShowSuggestions(true)}
        />
{showSuggestions && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map(suggestion => (
              <div
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <strong>{suggestion.title}</strong> - {suggestion.desc}
              </div>
            ))}
          </div>
        )}
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='card-container'>
        <h3>List of items ({filteredItems.length})</h3>
        {filteredItems.map(item => (
          <Card key={item.id} title={item.title} desc={item.desc} image={image} />
        ))}
      </div>
    </div>
  )
}

export default Content
