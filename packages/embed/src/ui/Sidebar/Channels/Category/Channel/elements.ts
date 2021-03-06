import { ChannelLink, Hash } from '@ui/shared/Channel'
import styled, { css, keyframes } from '@lib/emotion'
import Item from '@ui/SelectItem'

const fade = i => keyframes`
  from {
    transform: translateX(-${i * 7}px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: 1;
  }
`

interface Props {
  selected: boolean
  unread: boolean
  order: number
}

const Link = Item.withComponent(ChannelLink)
export const Root = styled(Link)<Props>`
  color: ${({ unread, theme }) =>
    unread && `${theme.colors._primary.fade(0.1).string()} !important`};
  /* animation: ${({ order }) => fade(order)} 0.5s ease; */

  &:hover {
    background-color: ${({ selected, theme }) =>
      !selected && theme.colors._primary.fade(0.96).string()};
    color: ${({ theme, selected }) =>
      !selected && theme.colors._primary.fade(0.3).string()};
  }

  ${({ unread, theme }) =>
    unread &&
    css`
      &::before {
        position: absolute;
        display: block;
        content: '';

        left: -8px;
        top: 50%;
        transform: translateY(-50%);

        height: 8px;
        width: 4px;
        background-color: ${theme.colors._primary.fade(0.4).string()};
        border-radius: 0 6px 6px 0;
      }
    `}
`

export const Hashtag = styled(Hash)`
  flex-shrink: 0;
  opacity: 0.6;
  height: 100%;
  width: 16px;
  margin-right: 7px;
`

export const Name = styled('div')`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`

export const Pings = styled('div')`
  display: inline-block;
  flex-shrink: 0;
  padding: 0 6px;
  margin: 7px 0;
  border-radius: 3px;

  font-size: 75%;
  line-height: 150%;
  font-weight: 500;

  background-color: #f04747;
  color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 hsla(0, 0%, 100%, 0.15);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
`
