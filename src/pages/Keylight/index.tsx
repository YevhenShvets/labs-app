import { Menu, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import React, { Fragment, useEffect, useState } from 'react'
import { Color, ColorResult, PhotoshopPicker } from 'react-color'
import { classnames } from 'tools/common'

interface Group {
  name: string
  items: string[]
  color: Color
}

interface Preset {
  name: string
  groups: string[]
}

export interface KeylightPageProps {}

// eslint-disable-next-line no-empty-pattern
const KeylightPage = ({}: KeylightPageProps) => {
  const [groupColor, setGroupColor] = useState<Color | undefined>()
  const [selectedGroup, setSelectedGroup] = useState<Group | undefined>()
  const [selectedGroups, setSelectedGroups] = useState<Group[] | undefined>()
  const [buttons] = useState([
    { name: 'Num lock' },
    { name: '/' },
    { name: '*' },
    { name: '<===' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '-' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '+' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    {
      name: 'Enter',
      className: 'row-span-2',
    },
    {
      name: '0',
      className: 'col-span-2',
    },
    { name: '.' },
  ])

  const [groups, setGroups] = useState<Group[]>([])
  const [presets, setPresets] = useState<Preset[]>([])

  const onAddGroup = () => {
    const name = prompt('Enter group name')
    if (name) {
      setGroups(prev => [
        ...prev,
        { name: name, items: [], color: groupColor ?? '#fff' },
      ])
    }

    setGroupColor(undefined)
  }

  useEffect(() => {
    const groups = localStorage.getItem('groups') ?? '[]'
    const presets = localStorage.getItem('presets') ?? '[]'

    setGroups(JSON.parse(groups))
    setPresets(JSON.parse(presets))
  }, [])

  const onClickSave = () => {
    console.log('onsave')
    localStorage.setItem('groups', JSON.stringify(groups))
    localStorage.setItem('presets', JSON.stringify(presets))
  }

  const onClickGroup = (groupName: string) => {
    setSelectedGroup(groups.find(group => group.name === groupName))

    setTimeout(() => {
      setSelectedGroup(undefined)
    }, 5000)
  }

  const onClickPreset = (presetName: string) => {
    const preset = presets.find(preset => preset.name === presetName)

    setSelectedGroups(
      groups.filter(group => preset?.groups.includes(group.name)),
    )

    setTimeout(() => {
      setSelectedGroups(undefined)
    }, 5000)
  }

  const onAddPreset = () => {
    const name = prompt('Enter preset name')
    if (name) {
      const groups = prompt('Enter groups (e.x name, name1, name2)')

      if (groups) {
        setPresets(prev => [
          ...prev,
          { name, groups: groups.replaceAll(' ', '').split(',') },
        ])
      }
    }
  }

  const onChangeGroupColor = (color: ColorResult) => {
    setGroupColor(color.hex)
  }

  const onChangeItem = (group: string, key: string) => {
    setGroups(prev =>
      prev.reduce((prev: Group[], next) => {
        if (next.name === group) {
          if (next.items.includes(key)) {
            const items = next.items.filter(item => item !== key)
            return [...prev, { ...next, items }]
          }
          return [...prev, { ...next, items: [...next.items, key] }]
        }

        return [...prev, next]
      }, []),
    )
  }

  const getKeyBorder = (key: string) => {
    const group = selectedGroup?.items.includes(key)
      ? selectedGroup
      : selectedGroups
      ? selectedGroups.find(group => group.items.includes(key))
      : undefined


    if (group) {
      return group.color.toString()
    }

    return '#fff'
  }

  return (
    <div className="flex">
      <nav className="h-[100vh] bg-neutral-700 w-[45vw]">
        <div className="flex flex-col p-5 h-[45%]">
          <p className="text-2xl font-bold text-blue-600">Groups</p>

          <div className="flex flex-col overflow-y-scroll">
            {groups.map(({ color, name }) => (
              <button
                className="pb-3 pl-5 self-start"
                onClick={() => onClickGroup(name)}
              >
                <p
                  className="text-xl text-gray-300 font-medium"
                  style={{ color: color.toString() }}
                >
                  {name}
                </p>
              </button>
            ))}
          </div>

          <button onClick={() => setGroupColor('#fff')} className="self-end">
            <PlusCircleIcon className="w-7 h-7 stroke-blue-700" />
          </button>
        </div>

        <div className="flex flex-col p-5 h-[45%]">
          <p className="text-2xl font-bold text-orange-600">Presets</p>

          <div className="flex flex-col overflow-y-scroll">
            {presets.map(({ name }) => (
              <button
                className="pb-3 pl-5 self-start"
                onClick={() => onClickPreset(name)}
              >
                <p className="text-xl text-orange-300 font-medium">{name}</p>
              </button>
            ))}
          </div>

          <button onClick={onAddPreset} className="self-end">
            <PlusCircleIcon className="w-7 h-7 stroke-orange-700" />
          </button>
        </div>
      </nav>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-5 gap-2 text-center w-fit h-fit">
          {buttons.map(({ name, className }) => (
            <Menu as="div" className={classnames('relative', className)}>
              <Menu.Button
                as={'div'}
                className={classnames(
                  'bg-slate-50 px-5 py-7 h-full rounded-lg text-lg font-medium border-[1.5px] border-stone-200 hover:bg-zinc-200 hover:border-gray-300',
                )}
                style={{
                  borderColor: getKeyBorder(name),
                }}
              >
                {name}
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    <div className="px-8 py-4">
                      {groups.map(({ name: groupName, items }) => (
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            checked={items.includes(name)}
                            onChange={() => onChangeItem(groupName, name)}
                            id={`check${groupName}`}
                          />

                          <label
                            className="form-check-label flex text-gray-800"
                            htmlFor={`check${groupName}`}
                          >
                            {groupName}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>
      </div>
      {groupColor && (
        <div className="z-10 absolute inset-0 top-[calc(50%-150px)] left-[calc(50%-150px)]">
          <PhotoshopPicker
            color={groupColor}
            onChange={onChangeGroupColor}
            onAccept={onAddGroup}
          />
        </div>
      )}

      <div className="absolute bottom-4 left-4" onClick={onClickSave}>
        <button className="p-2 rounded-xl bg-green-200 hover:bg-green-600 active:bg-gray-300">
          Save
        </button>
      </div>
    </div>
  )
}

export default KeylightPage
